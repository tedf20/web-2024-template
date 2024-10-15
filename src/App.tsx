import { useState } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline, Container, Typography, Box } from '@mui/material';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import { Recipe } from './types/Recipe';
import { createTheme } from '@mui/material/styles';
import { purple, green, orange } from '@mui/material/colors';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    background: {
      default: orange[100],
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
});

const styledComponentsTheme = {
  palette: muiTheme.palette,
};

const AppContainer = styled(Container)`
  padding: 20px;
  background: linear-gradient(135deg, ${purple[100]}, ${green[100]}, ${orange[100]});
  min-height: 100vh;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Typography)`
  text-align: center;
  color: ${purple[700]};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const initialRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Groovy Guacamole',
    ingredients: [
      { name: 'Avocados', amount: 3, unit: 'pcs' },
      { name: 'Lime', amount: 1, unit: 'pc' },
      { name: 'Red onion', amount: 0.5, unit: 'pc' },
      { name: 'Tomato', amount: 1, unit: 'pc' },
      { name: 'Cilantro', amount: 2, unit: 'tbsp' },
    ],
    instructions: 'Mash avocados, mix in chopped onion, tomato, and cilantro. Add lime juice and salt to taste.',
    servings: 4,
  },
  {
    id: '2',
    name: 'Funky Fried Rice',
    ingredients: [
      { name: 'Cooked rice', amount: 3, unit: 'cups' },
      { name: 'Mixed vegetables', amount: 1, unit: 'cup' },
      { name: 'Eggs', amount: 2, unit: 'pcs' },
      { name: 'Soy sauce', amount: 2, unit: 'tbsp' },
    ],
    instructions: 'Stir-fry vegetables, add beaten eggs, mix in rice and soy sauce. Cook until heated through.',
    servings: 3,
  },
  {
    id: '3',
    name: 'Psychedelic Pizza',
    ingredients: [
      { name: 'Pizza dough', amount: 1, unit: 'pc' },
      { name: 'Tomato sauce', amount: 0.5, unit: 'cup' },
      { name: 'Mozzarella', amount: 2, unit: 'cups' },
      { name: 'Colorful bell peppers', amount: 2, unit: 'pcs' },
    ],
    instructions: 'Spread sauce on dough, add cheese and sliced peppers. Bake at 220°C for 15 minutes.',
    servings: 4,
  },
  {
    id: '4',
    name: 'Disco Fruit Salad',
    ingredients: [
      { name: 'Pineapple', amount: 1, unit: 'cup' },
      { name: 'Mango', amount: 1, unit: 'cup' },
      { name: 'Kiwi', amount: 2, unit: 'pcs' },
      { name: 'Strawberries', amount: 1, unit: 'cup' },
    ],
    instructions: 'Chop all fruits into bite-sized pieces. Mix in a bowl. Chill before serving.',
    servings: 4,
  },
  {
    id: '5',
    name: 'Retro Rainbow Smoothie',
    ingredients: [
      { name: 'Banana', amount: 1, unit: 'pc' },
      { name: 'Spinach', amount: 1, unit: 'cup' },
      { name: 'Mixed berries', amount: 1, unit: 'cup' },
      { name: 'Almond milk', amount: 1, unit: 'cup' },
    ],
    instructions: 'Blend all ingredients until smooth. Serve chilled.',
    servings: 2,
  },
];

const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipes([...recipes, { ...newRecipe, id: Date.now().toString() }]);
  };

  const handleEditRecipe = (updatedRecipe: Recipe) => {
    setRecipes(recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe));
    setEditingRecipe(null);
  };

  const handleDeleteRecipe = (id: string) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={styledComponentsTheme}>
        <CssBaseline />
        <Box sx={{ background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)', minHeight: '100vh', padding: '20px' }}>
          <AppContainer maxWidth="md">
            <Title variant="h2" component="h1">
              Groovy Recipe Manager
            </Title>
            <RecipeList
              recipes={recipes}
              onEdit={setEditingRecipe}
              onDelete={handleDeleteRecipe}
            />
            <RecipeForm
              onSubmit={editingRecipe ? handleEditRecipe : handleAddRecipe}
              initialRecipe={editingRecipe}
            />
          </AppContainer>
        </Box>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
