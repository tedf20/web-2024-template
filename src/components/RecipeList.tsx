import { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Collapse, TextField } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import { Recipe } from '../types/Recipe';
import styled from 'styled-components';

const StyledListItem = styled(ListItem)`
  background-color: ${props => props.theme.palette.background.paper};
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

interface RecipeListProps {
  recipes: Recipe[];
  onEdit: (recipe: Recipe) => void;
  onDelete: (id: string) => void;
}

const RecipeList = ({ recipes, onEdit, onDelete }: RecipeListProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [servings, setServings] = useState<{ [key: string]: number }>({});

  const handleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleServingsChange = (id: string, value: number) => {
    setServings({ ...servings, [id]: value });
  };

  const calculateIngredient = (amount: number, originalServings: number, newServings: number) => {
    return (amount * newServings) / originalServings;
  };

  return (
    <List>
      {recipes.map((recipe) => (
        <StyledListItem key={recipe.id}>
          <ListItemText
            primary={<Typography variant="h6">{recipe.name}</Typography>}
            secondary={`Servings: ${recipe.servings}`}
          />
          <IconButton onClick={() => handleExpand(recipe.id)}>
            {expandedId === recipe.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton onClick={() => onEdit(recipe)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(recipe.id)}>
            <DeleteIcon />
          </IconButton>
          <Collapse in={expandedId === recipe.id} timeout="auto" unmountOnExit>
            <Typography variant="body2" style={{ marginTop: '10px' }}>
              Instructions: {recipe.instructions}
            </Typography>
            <Typography variant="subtitle1" style={{ marginTop: '10px' }}>Ingredients:</Typography>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name}: {calculateIngredient(ingredient.amount, recipe.servings, servings[recipe.id] || recipe.servings)} {ingredient.unit}
                </li>
              ))}
            </ul>
            <TextField
              type="number"
              label="Adjust servings"
              value={servings[recipe.id] || recipe.servings}
              onChange={(e) => handleServingsChange(recipe.id, Number(e.target.value))}
              inputProps={{ min: 1 }}
            />
          </Collapse>
        </StyledListItem>
      ))}
    </List>
  );
};

export default RecipeList;
