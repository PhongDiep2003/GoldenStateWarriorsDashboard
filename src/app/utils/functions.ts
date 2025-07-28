// utils functions
export const formatGameDateTime = (timestamp: string) => {
  const date = new Date(timestamp);

  // Format date (OCT 12)
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const formattedDate = `${months[date.getMonth()]} ${date.getDate()}`;

  // Format time (9:30 PM ET)
  const formattedTime =
    date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/New_York',
    }) + ' ET';

  return {
    date: formattedDate,
    time: formattedTime,
  };
};

export const scrollToMain = () => {
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.scrollIntoView({ behavior: 'smooth' });
  }
};
