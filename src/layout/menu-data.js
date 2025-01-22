const menu_data = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About Us',
    link: '/about'
  },
  {
    id: 3,
    hasDropdown: true,
    title: 'Our Product',
    link: '/about',
    submenus: [
      { title: 'Hot Water System', link: '/hotwater' },
      { title: 'Air Conditioner', link: '/ac' },
      { title: 'Solar Panel ', link: '/solar-panel' },
      { title: 'Commercial Hot Water', link: '/hot-water-commercial' },
    ]
  },
  {
    id: 4,
    title: 'FAQs',
    link: '/faq',
  },
  // {
  //   id: 4,
  //   hasDropdown: true,
  //   title: 'Pages',
  //   link: '/about',
  //   submenus: [
  //     { title: 'FAQs', link: '/faq' },
  //     { title: 'Privacy & Policy', link: '/policy' },
  //     { title: 'Terms & Conditions', link: '/terms' },
  //     { title: 'Login', link: '/login' },
  //     { title: 'Register', link: '/register' },
  //     { title: 'Forgot Password', link: '/forgot' },
  //     { title: 'My Cart', link: '/cart' },
  //     { title: 'My Wishlist', link: '/wishlist' },
  //     { title: 'Checkout', link: '/checkout' },
  //     { title: 'Error 404', link: '/404' },
  //   ]
  // },
  {
    id: 5,
    title: 'Contact us',
    link: '/contact'
  },
]

export default menu_data;
