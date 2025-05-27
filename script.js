
document.getElementById('idCardForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const collegename = document.getElementById('collegename').value.trim();
    const name = document.getElementById('name').value.trim();
    const rollno = document.getElementById('rollno').value.trim();
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value.trim();
    const inputphoto = document.getElementById('photo');
    const file = inputphoto.files[0];

    if (!collegename || !name || !rollno || !dob || !phone || !file) {
        alert("Please fill in all fields and upload a photo.");
        return;
    }

    const imageURL = URL.createObjectURL(file);

    const idCardHTML = `
        <div class="card">
            <div class="card-header">
                <p><strong>${collegename.toUpperCase()}</strong></p>
            </div>
            <div class="card-body">
                <div class="body">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Roll No:</strong> ${rollno}</p>
                    <p><strong>DOB:</strong> ${dob}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                </div>
                <div class="img-container">
                    <img src="${imageURL}" alt="Profile Picture" class="profile-pic">
                </div>
            </div>
        </div>
    `;

    document.getElementById('idCardPreview').innerHTML = idCardHTML;
});
