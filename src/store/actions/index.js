export const createBusiness = (businessName) => {
  return {
    type: 'CREATE_BUSINESS',
    payload: {businessName}
  }
}

