import { GoogleGenAI } from '@google/genai';
import { Response, Request } from 'express';

export class GeminiController {
  private static ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });

  static async generateRecipe(req: Request, res: Response) {
    const { prompt } = req.body;

    const response = await GeminiController.ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are a recipe Genrator. User input igredients then you genrate a titl of the food and generate the recipe and instructions. If you think the ingredients is unsuitable then just prompt Invalid Ingredients. Generate the recipe like this 
🍗 Chicken and Rice One-Pot Meal
🧂 Ingredients:
2 chicken thighs or breasts (boneless or bone-in)

1 cup uncooked white rice

2 cups chicken broth or water

1 small onion, chopped

2 cloves garlic, minced

1 tablespoon olive oil or butter

Salt and pepper to taste

Optional: herbs (like thyme or parsley), paprika, or soy sauce for extra flavor

👨‍🍳 Instructions:
Season the Chicken
Sprinkle salt, pepper, and (optional) paprika on both sides of the chicken.

Sear the Chicken
In a large pan or pot, heat olive oil over medium heat.
Add chicken and sear for 3–4 minutes per side until browned.
Remove and set aside.

Sauté Aromatics
In the same pot, add chopped onions and garlic.
Sauté for 2–3 minutes until softened and fragrant.

Add Rice
Stir in the uncooked rice and mix with the onions for about 1 minute to toast slightly.

Add Broth and Chicken
Pour in the chicken broth. Place the seared chicken back on top.

Simmer
Bring to a boil, then reduce heat to low.
Cover with a lid and simmer for 18–20 minutes, or until rice is cooked and liquid is absorbed.

Rest and Serve
Turn off heat and let sit covered for 5 minutes.
Fluff the rice and serve with fresh herbs if desired.

`,
      },
    });

    res.status(200).json({ prompt: response.text });
    return;
  }
}
