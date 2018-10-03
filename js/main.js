(() => {
    // variable stack first
    const courseInfo = document.querySelector('.profPanelText').querySelectorAll('p'),
        profImage = document.querySelector('.profileImg');

    // write functions in the middle
    function setCourseInfo(data) {
        courseInfo[0].textContent = data.coursename;
        courseInfo[0].innerHTML += ` - <span class="text-primary">${data.coursecode}</span>`;

        // add the prof name
        courseInfo[1].textContent = `Professor: ${data.profname}`;

        // add the prof image
        // AHHHHHH
        document.getElementById('').src = "img/eEdu_prof" + total + ".jpg";

        // add the times
        data.classtime.forEach(time => {
            let newTime = `<li><span class="fa fa-clock-o">${time}</span></li>`;
            courseInfo[1].parentElement.querySelector('ul').innerHTML += newTime;
        })
    }

    function getData() {
        fetch('admin/connect.php') // run a DB query
        .then(res => res.json())
        .then(data => {
            setCourseInfo(data[0]);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    // call the setCourseInfo function
    getData();

})();