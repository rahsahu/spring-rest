query {
  organization(login: "your-organization-name") {
    teams(first: 10) {
      nodes {
        name
        id
        slug
        description
      }
    }
  }
}
