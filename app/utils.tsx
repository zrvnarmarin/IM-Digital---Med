export function generateUrlFromFullName(fullName: string) {
  // Convert the full name to lowercase
  const lowercaseName = fullName.toLowerCase();

  // Replace spaces with hyphens
  const hyphenatedName = lowercaseName.replace(/\s+/g, '-');

  return hyphenatedName;
}