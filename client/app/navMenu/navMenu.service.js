'use strict';

angular.module('sgvmApp')
  .factory('navMenu', function () {

    function getNavMenu () {
      return [
        {
        'title': 'Quick Links',
        'link': 'quick-links',
        'subnav': [
          {
          'title': 'Lagunitas School District Website',
          'link': 'district-homepage'
          },
          {
          'title': 'Academic Calendar',
          'link': 'academic-calendar'
          },
          {
          'title': 'Events Calendar',
          'link': 'events-calendar'
          },
          {
          'title': 'District Newsletter and Other News',
          'link': 'news'
          },
          {
          'title': 'Lunch Menu',
          'link': 'lunch-menu'
          },
          {
          'title': 'MealTime Online',
          'link': 'meal-time'
          },
          {
          'title': 'Bus Schedule',
          'link': 'bus-schedule'
          },
          {
          'title': 'Student Handbook',
          'link': 'student-handbook'
          },
          {
          'title': 'Forms and Documents',
          'link': 'forms'
          }
          ]
        },
        {
        'title': 'Parents',
        'link': 'pto',
        'subnav': [
          {
          'title': 'PTO',
          'link': 'pto'
          },
          {
          'title': 'Info for Prospective Families',
          'link': 'prospective-families'
          },
          {
          'title': 'Montessori Calendar',
          'link': 'montessori-calendar'
          }
          ]
        },
        {
        'title': 'Classrooms',
        'link': 'michelle',
        'subnav': [
          {
          'title': 'Michelle Benjamin (K-1)',
          'link': 'michelle'
          },
          {
          'title': 'Nathan Murray (1-2)',
          'link': 'nathan'
          },
          {
          'title': 'Pauline Hope (3-4)',
          'link': 'pauline'
          },
          {
          'title': 'Alex Cusick (4-5)',
          'link': 'alex'
          },
          {
          'title': 'Terry Shea (Music)',
          'link': 'terry'
          },
          {
          'title': 'Erin (Art)',
          'link': 'erin'
          },
          {
          'title': 'Marlene (Gardening and Technology)',
          'link': 'marlene'
          },
          {
          'title': 'Buck (PE)',
          'link': 'buck'
          }
          ]
        },
        {
        'title': 'About',
        'link': 'about-us',
        'subnav': [
            {
            'title': 'About Us',
            'link': 'about-us'
            },
            {
            'title': 'About Montessori',
            'link': 'about-montessori'
            },
            {
            'title': 'Curriculum and Activities',
            'link': 'curriculum-and-activities'
            },
            {
            'title': 'Teachers and Staff',
            'link': 'teachers-and-staff'
            },
            {
            'title': 'Benefits of Montessori',
            'link': 'benefits-of-montessori'
            },
            {
            'title': 'The Five Great Lessons',
            'link': 'five-great-lessons'
            }
          ]
        },
        {
        'title': 'Contact',
        'link': 'contact'
        }
      ];
    }

    return {
      getNavMenu: getNavMenu
    };

  });
