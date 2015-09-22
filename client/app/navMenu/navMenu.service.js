'use strict';

angular.module('sgvmApp')
  .factory('navMenu', function () {

    function getNavMenu () {
      return [
        {
        'title': 'District Links',
        'link': 'district-links',
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
          'title': 'District News and Newsletter',
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
          'title': 'Marlene (Gardening)',
          'link': 'marlene'
          }
          ]
        },
        {
        'title': 'About',
        'link': 'about-us',
        'subnav': [
            {
            'title': 'About Lagunitas Montessori',
            'link': 'lagunitas-montessori'
            },
            {
            'title': 'Montessori Philosophy',
            'link': 'montessori-philosophy'
            },
            {
            'title': 'Curriculum',
            'link': 'curriculum'
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
