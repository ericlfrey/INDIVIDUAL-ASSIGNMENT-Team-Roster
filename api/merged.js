import { deleteSingleMember } from './members';
import { deleteTeam, getSingleTeam, getTeamMembers } from './teams';

const viewTeamMembers = async (firebaseKey) => {
  const teamObject = await getSingleTeam(firebaseKey);
  const membersArray = await getTeamMembers(firebaseKey);
  return { ...teamObject, membersArray };
};

const deleteTeamAndMembers = (firebaseKey) => new Promise((resolve, reject) => {
  getTeamMembers(firebaseKey).then((membersArray) => {
    const deleteMemberPromises = membersArray.map((member) => deleteSingleMember(member.firebaseKey));

    Promise.all(deleteMemberPromises).then(() => {
      deleteTeam(firebaseKey).then(resolve);
    });
  })
    .catch(reject);
});

export { viewTeamMembers, deleteTeamAndMembers };
