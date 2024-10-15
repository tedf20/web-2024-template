import { useState, useEffect } from 'react';
import { TextField, Button, IconButton, Typography } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { Recipe, Ingredient } from '../types/Recipe';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: ${props => props.theme.palette.background.paper};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const IngredientContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

interface RecipeFormProps {
  onSubmit: (recipe: Recipe) => void;
  initialRecipe: Recipe | null;
}

const RecipeForm = ({ onSubmit, initialRecipe }: RecipeFormProps) => {
  const [recipe, setRecipe] = useState<Recipe>({
    id: '',
    name: '',
    ingredients: [{ name: '', amount: 0, unit: '' }],
    instructions: '',
    servings: 1,
  });

  useEffect(() => {
    if (initialRecipe) {
      setRecipe(initialRecipe);
    }
  }, [initialRecipe]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (index: number, field: keyof Ingredient, value: string | number) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = { ...newIngredients[index], [field]: value };
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleAddIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, { name: '', amount: 0, unit: '' }] });
  };

  const handleRemoveIngredient = (index: number) => {
    const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(recipe);
    setRecipe({
      id: '',
      name: '',
      ingredients: [{ name: '', amount: 0, unit: '' }],
      instructions: '',
      servings: 1,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Typography variant="h5">{initialRecipe ? 'Edit Recipe' : 'Add New Recipe'}</Typography>
      <TextField
        name="name"
        label="Recipe Name"
        value={recipe.name}
        onChange={handleChange}
        required
      />
      <TextField
        name="servings"
        label="Servings"
        type="number"
        value={recipe.servings}
        onChange={handleChange}
        required
        inputProps={{ min: 1 }}
      />
      <Typography variant="h6">Ingredients</Typography>
      {recipe.ingredients.map((ingredient, index) => (
        <IngredientContainer key={index}>
          <TextField
            label="Ingredient Name"
            value={ingredient.name}
            onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
            required
          />
          <TextField
            label="Amount"
            type="number"
            value={ingredient.amount}
            onChange={(e) => handleIngredientChange(index, 'amount', Number(e.target.value))}
            required
            inputProps={{ min: 0, step: 0.1 }}
          />
          <TextField
            label="Unit"
            value={ingredient.unit}
            onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
            required
          />
          <IconButton onClick={() => handleRemoveIngredient(index)} disabled={recipe.ingredients.length === 1}>
            <RemoveIcon />
          </IconButton>
        </IngredientContainer>
      ))}
      <Button startIcon={<AddIcon />} onClick={handleAddIngredient}>
        Add Ingredient
      </Button>
      <TextField
        name="instructions"
        label="Instructions"
        multiline
        rows={4}
        value={recipe.instructions}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        {initialRecipe ? 'Update Recipe' : 'Add Recipe'}
      </Button>
    </FormContainer>
  );
};

export default RecipeForm;
