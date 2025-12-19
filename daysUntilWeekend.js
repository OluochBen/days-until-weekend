function daysUntilWeekend(date) {
    const currentDate = new Date(date);
    const dayOfWeek = currentDate.getUTCDay(); // 0 (Sun) – 6 (Sat)

    // If it's Saturday (6) or Sunday (0)
    if (dayOfWeek === 6 || dayOfWeek === 0) {
        return "It's the weekend!";
    }

    // Otherwise, calculate days until Saturday
    const daysUntilSaturday = (6 - dayOfWeek);

    if (daysUntilSaturday === 1) {
        return "1 day until the weekend.";
    } else {
        return `${daysUntilSaturday} days until the weekend.`;
    }
}
module.exports = daysUntilWeekend;