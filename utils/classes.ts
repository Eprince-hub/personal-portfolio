const classes = {
  // common classes for my application
  flex: {
    display: 'flex',
    background: 'red',
    marginRight: 400,
  },

  grow: {
    flexGrow: 1,
  },

  // The style for the whole main page of all pages
  main: {
    minHeight: '500vh',
  },

  navbarButtons: {
    width: '40%',
    height: 'inherit',
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#002B2B',

    '& a': {
      color: '#002B2B',
      fontFamily: 'Oswald',
    },
  },
};
export default classes;
