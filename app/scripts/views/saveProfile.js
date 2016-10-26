import $ from 'jquery';

function renderNewProfile(profileDatabase) {
  const form = $(`
    <form class="newProfile">
      <input type="text" name="first-name" placeholder="First Name" value="">
      <input type="text" name="last-name" placeholder="Last Name" value="">
      <input type="text" name="address" placeholder="Address" value="">
      <input type="tel" name="telephone" placeholder="Telephone" value="">
      <input type="text" name="creature" placeholder="Favorite Magical Creature" value="">
      <input type="submit" name="name" value="Submit">
    </form>
  `);

  form.on('submit', (e) => {
    e.preventDefault();
    const firstName = $(form).find('input[name="first-name"]').val().trim();
    const lastName = $(form).find('input[name="last-name"]').val().trim();
    const address = $(form).find('input[name="address"]').val().trim();
    const telephone = $(form).find('input[name="telephone"]').val().trim();
    const creature = $(form).find('input[name="creature"]').val().trim();
    profileDatabase.create({firstName, lastName, address, telephone, creature}, {
      success: () => {
        console.log('Profile logged to server.');
        console.log(firstName, lastName, address, telephone, creature);
      }

    });
  });
  return form;
}

export default renderNewProfile;
