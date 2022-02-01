Feature: Search Skill Academy

    As a user, I want to seach a class in skill academy

    Background:

        Given I am on the skillacademy page

    Scenario Outline: Performing search a class
        When I search <class> into the search box
        Then I should see the class <class> on the page

        Examples:
        |class|
        |"Pemrograman Bahasa C# dan .NET Core"|
