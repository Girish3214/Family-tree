export const insertMember = (familyDetails, selectedPerson, newMember) => {
  // insert when the id of the selected person is equal to familyDetails iterated id
  if (selectedPerson?.id === familyDetails?.id && familyDetails?.isParent) {
    const data = [newMember, ...familyDetails.childrens];
    return { ...familyDetails, childrens: data };
  }

  let newData = [];
  newData = familyDetails.childrens.map((data) => {
    if (!data.isParent) return data;
    return insertMember(data, selectedPerson, newMember);
  });

  return { ...familyDetails, childrens: newData };
};

export const searchNameInFamily = (family, searchValue, searchResult) => {
  if (family.name.toLowerCase().includes(searchValue.toLowerCase())) {
    searchResult.push(family);
  }

  if (!family.isParent) {
    return;
  }

  family?.childrens?.map((child) => {
    // if (child.name.toLowerCase().includes(searchValue.toLowerCase())) {
    //   searchResult.push(child);
    // }
    return searchNameInFamily(child, searchValue, searchResult);
  });

  return searchResult;
};
