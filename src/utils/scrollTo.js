export const scrollTo = ({ id }) => {
  const element = document.getElementById(id);

  if (element) {
    const rect = element.getBoundingClientRect();
    window.scrollTo({
      behavior: "smooth",
      top: rect.top,
    });
  }
};
