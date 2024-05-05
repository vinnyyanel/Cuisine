<?php

namespace Database\Seeders;

use App\Models\Plat;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Plat::factory()->create([
            'nom' => 'tantine',
            'description' => '$this->faker->text()',
            'ingredients'=> '$this->faker->text()',
            'recette'=> '$this->faker->text()',
            'temps'=> '45min',
            'difficultes'=> 'difficile',
            'user_id'=> 10,

        ]);
    }
}
