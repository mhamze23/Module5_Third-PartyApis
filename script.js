// Define today's date and current hour using the Day.js library
const today = dayjs();
const currentHour = today.hour();

// Execute when document is ready
$(function() {
  // Display and format the current day at the top of the page
  // Note that 'dddd, MMMM D' formats the date as 'day of week, month day'
  $('#currentDay').text(today.format('dddd, MMMM D') + 'th');

  // Create an array of hours from 9 to 17 for typical workday hours
  const hours = Array.from({length: 9}, (_, i) => i + 9);

  // Iterate over each hour in the hours array
  hours.forEach(hour => {
    // Define the textarea and button for each hour block
    const container = $(`#hour-${hour}`);
    const textarea = container.children('textarea');
    const button = container.children('button');

    // Apply past, present, or future CSS classes to each hour block based on the current hour
    if (currentHour > hour) {
      container.addClass('past');
    } else if (currentHour === hour) {
      container.addClass('present');
    } else {
      container.addClass('future');
    }

    // Retrieve and display stored values from local storage
    textarea.val(localStorage.getItem(`hour${hour}`));

    // Attach a click event listener to the save button
    // When the button is clicked, the corresponding textarea content will be saved to local storage
    button.on('click', function() {
      const text = textarea.val();
      localStorage.setItem(`hour${hour}`, text);
    });
  });
});
