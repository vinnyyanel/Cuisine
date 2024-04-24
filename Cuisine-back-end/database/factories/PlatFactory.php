<?php

namespace Database\Factories;

use App\Models\Plat;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Plat>
 */
class PlatFactory extends Factory
{

    protected $plat = Plat::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom' => $this->faker->name(),
        'description' => $this->faker->text(),
        'ingredients'=> $this->faker->text(),
        'recette'=> $this->faker->text(),
        'temps'=> $this->faker->name(),
        'difficultés'=> $this->faker->name(),
        'user_id'=> '1',
        ];
    }
}
