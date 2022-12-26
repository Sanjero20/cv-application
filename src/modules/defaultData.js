import uniqid from 'uniqid';

function defaultPersonData() {
  return {
    name: '',
    address: '',
    contact: '',
    email: '',
    description: '',
  };
}

function defaultEducationData() {
  return {
    id: uniqid(),
    schoolName: '',
    location: '',
    course: '',
    fromYr: '',
    toYr: '',
  };
}

function defaultWorkExpData() {
  return {
    id: uniqid(),
    companyName: '',
    location: '',
    role: '',
    roleDescription: '',
    fromYr: '',
    toYr: '',
  };
}

export { defaultPersonData, defaultEducationData, defaultWorkExpData };
