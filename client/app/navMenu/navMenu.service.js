'use strict';

angular.module('sgvmApp')
  .factory('navMenu', function () {

    function getNavMenu () {
      return [
        {
        'title': 'District Links',
        'link': 'district-homepage',
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
          'link': 'district-news'
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
          'title': 'District Student Handbook',
          'link': 'district-student-handbook'
          },
          {
          'title': 'Forms and Documents',
          'link': 'forms'
          }
          ]
        },
        {
        'title': 'PTO',
        'link': 'about-pto',
        'subnav': [
          {
          'title': 'About PTO',
          'link': 'about-pto'
          },
          {
          'title': 'Meeting Schedule',
          'link': 'meeting-schedule'
          },
          {
          'title': 'Meeting Minutes',
          'link': 'meeting-minutes'
          },
          {
          'title': 'Bylaws',
          'link': 'bylaws'
          },
          {
          'title': 'Volunteer Info',
          'link': 'volunteer-info'
          },
          {
          'title': 'Fundraising and LEAP',
          'link': 'fundraising-leap'
          },
          {
          'title': 'Fall Festival',
          'link': 'fall-festival'
          },
          {
          'title': 'Sgin up for eScrip',
          'link': 'escrip'
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
        'link': 'lagunitas-montessori',
        'subnav': [
            {
            'title': 'Info for Prospective Families',
            'link': 'prospective-families'
            },
            {
            'title': 'About Lagunitas Montessori',
            'link': 'lagunitas-montessori'
            },
            {
            'title': 'Montessori Philosophy',
            'link': 'montessori-philosophy'
            },
            {
            'title': 'Montessori Student Handbook',
            'link': 'montessori-student-handbook'
            },
            {
            'title': 'The Five Great Lessons',
            'link': 'five-great-lessons'
            },
            {
            'title': 'Benefits of Montessori',
            'link': 'benefits-of-montessori'
            },
            {
            'title': 'Curriculum',
            'link': 'curriculum'
            },
            {
            'title': 'FAQ',
            'link': 'faq'
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
