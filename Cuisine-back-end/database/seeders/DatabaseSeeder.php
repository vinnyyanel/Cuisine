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
        User::factory(10)->create();

        User::factory()->create([
            'nom' => 'Test',
            'prenom' => 'User',
            'dath_of_birth'=>'2000-12-12',
            'email' => 'test@example.com',
            'password'=> Hash::make('teste'),


        ]);


        Plat::factory()->create([
            'nom' => 'Test',
            'description' => '$this->faker->text()',
            'ingredients'=> '$this->faker->text()',
            'recette'=> '$this->faker->text()',
            'temps'=> '$this->faker->name()',
            'difficultés'=> '$this->faker->name()',
            'user_id'=> 1,


        ]);
    }
}
