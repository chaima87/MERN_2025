import dayjs from "dayjs";

import relativeTime from 'dayjs/plugin/relativeTime.js';
dayjs.extend(relativeTime);


// In formatDate.js, create and export a function that takes an ISO date, like 2023-01-01T12:34:56Z, 
//and returns a readable string as an output (e.g. January 1, 2023, 12:34:56 PM UTC):
export const convert1DateToString = (isodate) => dayjs(isodate).format("MMM,DD YY h:mm:sstsz")

//Have a function for converting date formats to appear like "4 months ago":
export const convert2 = (date) => dayjs(dayjs(date).format('YYYY-MM-DD')).fromNow()

// Have a function for converting date formats to appear like "Thursday, January 21, 2023":
export const convert3 = (date) => dayjs(date).format('dddd, MMMM DD, YYYY')

//Have a function for converting date formats to appear like "01/21/2023":
export const convert4 = (date) => dayjs(date).format('DD/MM/YYYY')







