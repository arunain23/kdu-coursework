


interface Recipe {
    image: string;
    name: string;
    rating: number;
    cuisine: string;
    ingredients: string[];
    difficulty: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    caloriesPerServing: number;
}

interface RecipeResponse {
    recipes: Recipe[];
}


async function fetchRecipesFromAPI(): Promise<RecipeResponse> {
    const response = await fetch('https://dummyjson.com/recipes');
    const jsonresponse = await response.json();
    return jsonresponse as RecipeResponse;
}


async function printAllRecipes(recipes : RecipeResponse): Promise<void> {
    
    var count=1;
    recipes.recipes.forEach(recipe => {
        console.log(`-----------------Recipe -${count}-----------------------`);
        console.log('Recipe:', recipe.name);
        console.log('Image:', recipe.image);
        console.log('Rating:', recipe.rating);
        console.log('Cuisine:', recipe.cuisine);
        console.log('Ingredients:', recipe.ingredients.join(', '));
        console.log('Difficulty:', recipe.difficulty);
        console.log('Total Time taken:',  recipe.prepTimeMinutes+recipe.cookTimeMinutes, 'minutes');
        
        console.log('Calorie count:', recipe.caloriesPerServing);
        count++;
        console.log('\n');
        
    });
}

async function searchRecipes(query: string): Promise<RecipeResponse> {
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    const jsonresponse = await response.json();
    return jsonresponse as RecipeResponse;
}


async function main() {

        const recipes = await fetchRecipesFromAPI();
        console.log('Fetched recipes:', recipes);

        const query = 'Pizza'; 
        const searchResults = await searchRecipes(query);
        console.log('Matched results for the given query :-', searchResults);

        await printAllRecipes(recipes);
}

main();
