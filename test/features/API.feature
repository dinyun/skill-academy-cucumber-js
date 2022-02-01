Feature: Search Skill Academy

    As a user, I want to seach a class in skill academy

    Background:

        Given I am on the skillacademy page

    Scenario Outline: Performing search a class
        When I search <class> into the search box
        Then I send get request to "https://skillacademy.com/skillacademy/discovery/search"

        Examples:
        |class|
        |"Pemrograman Bahasa C# dan .NET Core"|
