import { getSingleTeam, getTeamMembers } from './teams';

const viewTeamMembers = async (firebaseKey) => {
  const teamObject = await getSingleTeam(firebaseKey);
  const membersArray = await getTeamMembers(firebaseKey);
  return { ...teamObject, membersArray };
};

export default viewTeamMembers;
