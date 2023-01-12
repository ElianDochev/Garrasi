import React from 'react';
import { render } from 'react-dom';
import Tooltip from './modules/tooltip';
import $ from 'jquery';

const appIsOn = true;

window.onload = function () {
  if (appIsOn) {
    $(document).on('mouseover', '.g a', function (event) {
      if ($(this).attr('href').includes('translate.google.com')) {
        return;
      }
      // Create the tooltip box
      const tooltip = $('<div>')
        .addClass('tooltip')
        .css({
          border: '1px solid black',
          position: 'absolute',
          top: event.pageY + 10,
          left: event.pageX + 10,
          width: '500px',
          height: '400px',
          zIndex: 1000,
          backgroundColor: '#98ABED',
        });
      // Append the tooltip box to the body
      $('body').append(tooltip);
      render(<Tooltip href={$(this).attr('href')} />, tooltip[0]);

      $(document).on('mousemove', function (event) {
        tooltip.css({
          top: event.pageY + 10,
          left: event.pageX + 10,
        });
      });
    });
    $(document).on('mouseout', '.g a', function (event) {
      // Remove the tooltip box when the user is no longer hovering
      $('.tooltip').remove();
      $(document).off('mousemove');
    });
  }
};
