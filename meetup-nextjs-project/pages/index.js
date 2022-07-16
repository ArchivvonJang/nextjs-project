import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

function HomePage() {

  const DUMMY_MEETUPS = [
    {
      id: 'm1',
      title: 'A First Meeutup',
      image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      address: 'Some address 5, 12345 Berlin',
      description: 'This is a first meetup! join us!'
    },
    {
      id: 'm2',
      title: 'A Second Meeutup',
      image: 'https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
      address: 'Some address 15, 12225 Seoul',
      description: 'This is a Second meetup! join us!'
    },
  ]

  return(
    <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

export default HomePage;

