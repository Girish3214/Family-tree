import { jsPDF } from "jspdf";
import html2pdf from "html2pdf.js";

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
    return searchNameInFamily(child, searchValue, searchResult);
  });

  return searchResult;
};

export const printPdf = async (selectedPerson) => {
  var input = document.getElementById(selectedPerson?.id ?? 1);
  const opt = {
    margin: 1,
    filename: `${selectedPerson.name}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 4,
      useCORS: true,
      allowTaint: true,
      onclone: true,
    },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(input).save();
};
