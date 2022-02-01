Feature: Testing API

    As a user, I want to seach a class in skill academy

    Background:

        Given I am on the skillacademy page

    Scenario Outline: Performing search a class
        Then I send get request to "https://skillacademy.com/skillacademy/discovery/search"

        Examples:
        |class|
        |"Pemrograman Bahasa C# dan .NET Core"|
