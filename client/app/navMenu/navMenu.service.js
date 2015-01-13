'use strict';

angular.module('sgvmApp')
  .factory('navMenu', function () {

    function getNavMenu () {
      return [
        {
        'title': 'Parents',
        'link': 'pto',
        'subnav': [
          {
          'title': 'PTO',
          'link': 'pto'
          },
          {
          'title': 'Calendar',
          'link': 'calendar'
          },
          {
          'title': 'Newsletter',
          'link': 'newsletter'
          },
          {
          'title': 'Lunch Menu',
          'link': 'lunch-menu'
          },
          {
          'title': 'Bus Schedule',
          'link': 'bus-schedule'
          },
          {
          'title': 'Forms',
          'link': 'forms'
          },
          {
          'title': 'Student Handbook',
          'link': 'student-handbook'
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
            }
          ]
        },
        {
        'title': 'Contact',
        'link': 'contact'
        }
      ]};

    return {
      getNavMenu: getNavMenu
    };

  });