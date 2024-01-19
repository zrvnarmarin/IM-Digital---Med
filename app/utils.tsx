export function generateUrlFromFullName(fullName: string) {
  // Convert the full name to lowercase
  const lowercaseName = fullName.toLowerCase();

  // Replace spaces with hyphens
  const hyphenatedName = lowercaseName.replace(/\s+/g, '-');

  return hyphenatedName;
}

export function getFirstName(fullName: string) {
  // Split the full name into an array of words
  const nameArray = fullName.split(' ');

  // Return the first element (the first name)
  return nameArray[0];
}