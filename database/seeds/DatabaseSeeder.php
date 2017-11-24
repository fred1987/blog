<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(ProfilesTableSeeder::class);
        $this->call(PostsTableSeeder::class);
        $this->call(SectionsTableSeeder::class);
        $this->call(PostSectionTableSeeder::class);
        $this->call(TagsTableSeeder::class);
        $this->call(PostTagTableSeeder::class);
    }
}
