## Days Until Weekend


![License](https://img.shields.io/badge/License-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)

A lightweight JavaScript utility that checks whether a given date falls on the weekend and calculates how many days remain until Saturday.

## Features


- ✔️ Detects if a date is Saturday or Sunday  
- ✔️ Calculates the number of days remaining until the weekend  
- ✔️ Zero dependencies  
- ✔️ Uses UTC to avoid timezone inconsistencies  
- ✔️ Works in browser or Node.js 

## Installation

Copy the function into your project:

```js
function daysUntilWeekend(date) {
    const currentDate = new Date(date);
    const dayOfWeek = currentDate.getUTCDay(); // 0 (Sun) – 6 (Sat)

    if (dayOfWeek === 6 || dayOfWeek === 0) {
        return "It's the weekend!";
    }

    const daysUntilSaturday = 6 - dayOfWeek;

    if (daysUntilSaturday === 1) {
        return "1 day until the weekend.";
    } else {
        return `${daysUntilSaturday} days until the weekend.`;
    }
}
```

## Usage

```js
console.log(daysUntilWeekend("2025-01-15"));
// → "3 days until the weekend."

console.log(daysUntilWeekend("2025-01-18"));
// → "It's the weekend!"
```

## Project Structure
``` code
your-repo/
│── daysUntilWeekend.js
│── README.md
│── LICENSE
│── test.js
```


## Contributing

Pull requests are welcome!
If you have ideas for improvements or additional utilities, feel free to open an issue.

## License

Distributed under the MIT License.
See LICENSE for more information.

## Support

If you find this useful, leave a star on the repository!