const formatDateAndTime = (isoDateString) => {
    const date = new Date(isoDateString);

    const localDate = date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const localTime = date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    return { date: localDate, time: localTime };
};

export default formatDateAndTime;