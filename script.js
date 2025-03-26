// --- Raw CSV Data (Copied from your input) ---
const csvData = `
Level,X axis,Y axis,ImageName
1,83,995,""
2,84,164,""
2,87,107,""
2,91,197,""
2,94,196,""
2,96,655,""
1,100,975,""
1,102,974,""
2,104,184,""
2,107,692,""
2,109,648,""
1,109,985,""
2,115,180,""
2,116,632,""
2,130,331,""
2,213,94,""
2,221,130,""
1,230,51,""
1,930,774,""
1,933,123,""
1,942,289,""
1,948,294,""
1,966,142,""
1,969,282,""
1,970,248,""
1,973,123,""
1,974,383,""
1,975,127,""
1,977,415,""
1,978,437,""
1,978,96,""
1,979,133,""
1,980,137,""
1,981,144,""
1,982,80,""
1,983,384,""
1,984,103,""
5,434,301,""
4,454,263,""
4,455,725,""
7,461,512,""
7,463,512,""
6,472,621,""
4,472,722,""
6,478,603,""
7,535,538,""
4,543,247,""
4,543,256,""
5,554,319,""
5,567,625,""
5,572,693,""
6,577,525,""
3,586,199,""
3,586,199,""
6,599,507,""
4,668,288,""
5,678,614,""
5,679,574,""
5,686,598,""
5,687,571,""
5,688,581,""
4,689,277,""
4,692,276,""
4,695,275,""
4,695,277,""
4,705,463,""
4,709,651,""
4,710,667,""
4,715,457,""
4,715,536,""
4,717,636,""
4,721,681,""
4,737,628,""
3,740,212,""
5,324,599,""
4,324,741,""
4,327,753,""
5,338,555,""
5,346,593,""
4,346,760,""
5,350,609,""
4,352,743,""
4,353,701,""
5,363,576,""
5,372,568,""
4,373,735,""
5,377,368,""
5,380,345,""
6,382,451,""
5,396,691,""
5,399,367,""
5,412,324,""
5,621,682,image-115.png
5,305,610,image-116.png
5,349,611,image-117.png
5,344,594,image-118.png
5,328,594,image-119.png
4,283,503,image-12.png
5,338,568,image-120.png
5,338,557,image-121.png
6,596,544,image-122.png
6,485,623,image-123.png
6,474,619,image-124.png
6,476,390,image-125.png
2,210,142,image-126.png
1,16,725,image-127.png
1,18,733,image-128.png
1,555,61,image-129.png
4,283,334,image-13.png
1,57,887,image-130.png
1,55,871,image-131.png
2,682,105,image-132.png
2,685,79,image-133.png
2,639,88,image-134.png
2,536,111,image-135.png
2,520,95,image-136.png
1,921,21,image-137.png
1,910,957,image-138.png
1,859,936,image-139.png
4,255,679,image-14.png
1,147,950,image-140.png
1,104,923,image-141.png
1,101,944,image-142.png
1,120,950,image-143.png
1,231,952,image-144.png
1,245,973,image-145.png
1,252,936,image-146.png
1,259,935,image-147.png
1,258,956,image-148.png
2,917,639,image-149.png
4,285,366,image-15.png
2,918,645,image-150.png
2,902,663,image-151.png
2,914,664,image-152.png
2,910,687,image-153.png
2,839,875,image-154.png
2,357,904,image-155.png
2,666,879,image-156.png
2,670,871,image-157.png
2,692,862,image-158.png
2,794,80,image-159.png
4,298,367,image-16.png
1,948,427,image-160.png
1,945,416,image-161.png
4,762,538,image-162.png
4,774,506,image-163.png
4,750,493,image-164.png
4,711,462,image-166.png
4,710,486,image-167.png
2,368,147,image-168.png
2,641,876,image-169.png
4,288,642,image-17.png
2,644,884,image-170.png
1,253,4,image-172.png
2,668,881,image-173.png
1,733,46,image-174.png
1,965,442,image-175.png
2,166,111,image-176.png
1,415,58,image-177.png
1,433,40,image-178.png
5,352,608,image-179.png
4,283,334,image-18.png
5,420,372,image-180.png
5,567,305,image-181.png
5,579,311,image-182.png
5,590,302,image-183.png
5,581,368,image-184.png
5,652,439,image-185.png
5,352,608,image-186.png
6,583,505,image-187.png
6,480,602,image-189.png
4,237,308,image-19.png
6,380,450,image-190.png
6,476,390,image-191.png
5,401,365,image-192.png
5,379,366,image-193.png
5,428,308,image-194.png
5,432,300,image-195.png
5,580,368,image-196.png
5,685,569,image-197.png
5,686,580,image-198.png
5,620,678,image-199.png
2,367,874,image-2.png
4,236,305,image-20.png
4,316,267,image-21.png
4,309,276,image-22.png
4,284,331,image-23.png
2,823,125,image-236.png
1,24,704,image-237.png
3,285,194,image-238.png
2,871,324,image-239.png
4,644,288,image-24.png
3,268,821,image-240.png
3,609,205,image-241.png
3,563,208,image-242.png
3,595,221,image-243.png
3,594,224,image-244.png
3,556,190,image-245.png
3,578,194,image-246.png
1,941,571,image-247.png
1,939,560,image-248.png
1,597,31,image-249.png
4,317,266,image-25.png
1,608,54,image-250.png
1,614,39,image-251.png
1,59,899,image-252.png
3,587,201,image-253.png
2,548,101,image-254.png
4,237,520,image-26.png
4,667,706,image-27.png
4,262,532,image-28.png
4,312,705,image-29.png
2,828,135,image-3.png
4,251,318,image-30.png
5,380,342,image-31.png
1,871,972,image-315.png
4,647,292,image-316.png
4,702,464,image-317.png
4,722,683,image-318.png
4,540,271,image-319.png
5,372,442,image-32.png
5,340,380,image-33.png
5,588,306,image-34.png
6,577,523,image-35.png
4,456,727,image-357.png
4,488,726,image-358.png
4,459,717,image-359.png
6,601,482,image-36.png
4,347,283,image-360.png
4,372,296,image-361.png
4,375,279,image-362.png
6,524,397,image-38.png
4,534,231,image-389.png
4,549,768,image-390.png
4,663,766,image-391.png
5,573,695,image-392.png
5,621,678,image-393.png
5,625,695,image-394.png
5,381,347,image-395.png
5,361,387,image-396.png
5,574,701,image-397.png
5,361,387,image-398.png
5,413,344,image-399.png
1,77,30,image-40.png
5,419,375,image-400.png
5,654,443,image-401.png
5,589,305,image-402.png
5,686,613,image-403.png
5,366,433,image-404.png
5,371,444,image-405.png
1,47,430,image-41.png
1,68,578,image-42.png
1,732,42,image-43.png
1,990,754,image-44.png
1,255,955,image-45.png
1,1,599,image-46.png
1,3,591,image-47.png
1,59,887,image-49.png
2,857,177,image-5.png
1,68,889,image-50.png
1,41,889,image-51.png
1,33,877,image-52.png
1,10,856,image-53.png
1,8,883,image-54.png
1,45,917,image-55.png
1,59,914,image-56.png
1,60,888,image-57.png
1,7,606,image-58.png
1,48,620,image-59.png
2,101,297,image-6.png
1,62,597,image-60.png
1,69,573,image-61.png
1,56,559,image-62.png
1,35,554,image-63.png
1,16,725,image-64.png
1,22,733,image-65.png
1,35,760,image-66.png
1,40,752,image-67.png
1,71,755,image-69.png
2,876,687,image-7.png
1,62,735,image-70.png
1,37,720,image-71.png
1,37,702,image-72.png
1,16,725,image-73.png
1,22,732,image-74.png
1,41,395,image-76.png
1,63,418,image-77.png
1,55,237,image-78.png
1,57,260,image-79.png
3,811,248,image-8.png
1,71,269,image-80.png
1,51,295,image-81.png
1,76,141,image-82.png
1,80,964,image-83.png
1,101,945,image-84.png
5,651,439,image-85.png
5,659,375,image-86.png
4,762,539,image-88.png
4,750,493,image-89.png
3,432,208,image-9.png
4,771,506,image-90.png
5,659,375,image-91.png
5,655,440,image-92.png
4,714,453,image-93.png
4,711,462,image-94.png
4,710,486,image-95.png
1,976,870,image-96.png
2,909,628,image-98.png
5,336,553,image-99.png
2,496,77,image.png
2,125,791,image-1.png
3,610,806,image-10.png
5,338,564,image-100.png
1,41,754,image-101.png
1,105,956,image-102.png
1,103,923,image-103.png
1,120,951,image-104.png
1,111,987,image-105.png
1,107,998,image-106.png
1,129,982,image-107.png
1,138,997,image-108.png
1,147,963,image-109.png
3,216,715,image-11.png
6,473,393,image-110.png
6,381,453,image-111.png
6,583,508,image-112.png
5,686,573,image-113.png
5,687,582,image-114.png
4,715,454,image-165.png
2,643,880,image-171.png
6,507,566,image-188.png
3,424,224,image-314.png
6,521,386,image-37.png
7,535,466,image-39.png
7,463,462,image-39.png
7,463,512,image-39.png
7,470,544,image-39.png
7,535,538,image-39.png
1,54,869,image-48.png
1,43,747,image-68.png
1,16,385,image-75.png
4,723,679,image-97.png
`;

// --- Configuration ---
const GAME_MAP_MAX_X = 1000;
const GAME_MAP_MAX_Y = 1000;
const IMAGE_BASE_PATH = './images/supplies/'; // Define base path for images

// --- Get HTML Elements ---
const mapContainer = document.getElementById('map-container');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const popupCloseButton = document.getElementById('popup-close');

// --- Get Map Display Dimensions (Consider moving inside or delaying if needed) ---
let mapDisplayWidth = mapContainer.offsetWidth;
let mapDisplayHeight = mapContainer.offsetHeight;

// --- Array to hold parsed treasure data ---
let treasureData = [];

// --- Function to Parse CSV Data (MODIFIED) ---
function parseCSV(data) {
    const lines = data.trim().split('\n');
    // Skip header row by starting loop at 1 or slice:
    const dataLines = lines.slice(1); // Get all lines except the first

    const parsedData = [];
    for (let i = 0; i < dataLines.length; i++) {
        const line = dataLines[i].trim();
        if (!line) continue;

        // Split by comma, but handle potential commas within quoted fields if necessary
        // For this specific CSV structure, simple split should work.
        const columns = line.split(',');

        // Expect at least 4 columns now
        if (columns.length >= 4) {
            try {
                const level = parseInt(columns[0].trim(), 10);
                const x = parseInt(columns[1].trim(), 10);
                const y = parseInt(columns[2].trim(), 10);
                // Get ImageName (column index 3), trim whitespace, and remove surrounding quotes
                const imageName = columns[3].trim().replace(/^"|"$/g, '');

                if (!isNaN(level) && !isNaN(x) && !isNaN(y)) {
                    // Add imageName to the parsed object
                    parsedData.push({ level: level, x: x, y: y, imageName: imageName });
                } else {
                    console.warn(`Skipping line ${i + 2}: Could not parse numbers - ${line}`);
                }
            } catch (error) {
                console.error(`Error parsing line ${i + 2}: ${line}`, error);
            }
        } else {
            console.warn(`Skipping line ${i + 2}: Incorrect number of columns - ${line}`);
        }
    }
    return parsedData;
}



// --- Function to Create and Place Markers (MODIFIED) ---
function placeMarkers() {
    mapContainer.innerHTML = ''; // Clear existing markers

    // Update dimensions here in case they weren't ready initially
    mapDisplayWidth = mapContainer.offsetWidth;
    mapDisplayHeight = mapContainer.offsetHeight;

    treasureData.forEach(treasure => {
        const marker = document.createElement('div');
        marker.className = 'treasure-marker';

        // Coordinate Calculation (Bottom-Left Origin)
        const pixelX = (treasure.x / GAME_MAP_MAX_X) * mapDisplayWidth;
        const pixelY = ( (GAME_MAP_MAX_Y - treasure.y) / GAME_MAP_MAX_Y ) * mapDisplayHeight;

        const markerSize = 24;
        marker.style.left = `${pixelX - (markerSize / 2)}px`;
        marker.style.top = `${pixelY - (markerSize / 2)}px`;
        marker.textContent = treasure.level;

        // Set Color Based on Level
        let backgroundColor = 'rgba(128, 128, 128, 0.7)';
        let textColor = 'black'; // *** NEW: Default text color is black ***

        switch (treasure.level) {
            case 1:
                backgroundColor = 'rgba(0, 0, 255, 0.7)'; // Blue
                textColor = 'white'; // *** NEW: Set Level 1 text to white ***
                break;
            case 2: backgroundColor = 'rgba(0, 255, 255, 0.7)'; break; // Cyan, uses default black text
            case 3: backgroundColor = 'rgba(0, 255, 0, 0.7)'; break; // Green, uses default black text
            case 4: backgroundColor = 'rgba(255, 255, 0, 0.7)'; break; // Yellow, uses default black text
            case 5: backgroundColor = 'rgba(255, 165, 0, 0.7)'; break; // Orange, uses default black text
            case 6: backgroundColor = 'rgba(255, 0, 0, 0.7)'; break; // Red, uses default black text
            case 7:
                backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Black
                textColor = 'white'; // Keep white for level 7
                break;
            // default case uses black text as initialized
        }
        marker.style.backgroundColor = backgroundColor;
        marker.style.color = textColor; // Apply the determined text color

        // Store data within the element for the popup
        marker.dataset.x = treasure.x;
        marker.dataset.y = treasure.y;
        marker.dataset.level = treasure.level;
        // *** NEW: Store imageName in dataset ***
        marker.dataset.imageName = treasure.imageName;

        // Add click event listener
        marker.addEventListener('click', showPopup); // Pass the event to showPopup

        mapContainer.appendChild(marker);
    });

    console.log(`Placed ${treasureData.length} markers.`);
}

// --- Function to Show Popup (MODIFIED) ---
function showPopup(event) { // Event object is automatically passed
    const marker = event.target; // Get the marker that was clicked

    // Retrieve data directly from the clicked marker's dataset
    const clickedX = marker.dataset.x;
    const clickedY = marker.dataset.y;
    const clickedLevel = marker.dataset.level;
    const clickedImageName = marker.dataset.imageName; // Get the image name

    // Start building popup content HTML
    let contentHTML = `Treasure Info:<br>Level: ${clickedLevel}<br>Coordinates: (X: ${clickedX}, Y: ${clickedY})`;

    // *** NEW: Check if an image name exists and add image tag ***
    if (clickedImageName && clickedImageName !== "") { // Check if imageName is not empty
        const imagePath = `${IMAGE_BASE_PATH}${clickedImageName}`; // Construct full path
        // *** NEW: Wrap image in link and constrain size ***
        contentHTML += `<br>
          <a href="${imagePath}" target="_blank" rel="noopener noreferrer" title="Click to view full image">
            <img src="${imagePath}" 
                 alt="Supply Image for Level ${clickedLevel}" 
                 style="display: block; max-width: 100%; max-height: 200px; object-fit: contain; margin: 10px auto 0; cursor: pointer;">
          </a>`;
        // *** End NEW block ***
    }
    // *** End Image Addition ***

    // Set the complete HTML content
    popupContent.innerHTML = contentHTML;

    // Position the popup near the click event (adjust as needed)
    let popupX = event.pageX + 10; // Offset slightly from cursor
    let popupY = event.pageY + 10;

    // Basic boundary check (simplified)
    const popupRect = popup.getBoundingClientRect(); // Get dimensions *after* content is set (might need slight delay or fixed size)
    const bodyRect = document.body.getBoundingClientRect();

    // Adjust if too far right (consider scroll)
     if (popupX + popupRect.width > bodyRect.width + window.scrollX) {
         popupX = event.pageX - popupRect.width - 10; // Place left of cursor
     }
     // Adjust if too far down (consider scroll)
     if (popupY + popupRect.height > bodyRect.height + window.scrollY) {
         popupY = event.pageY - popupRect.height - 10; // Place above cursor
     }
     // Adjust if too far left/top (less common)
     if (popupX < window.scrollX) popupX = window.scrollX + 5;
     if (popupY < window.scrollY) popupY = window.scrollY + 5;


    popup.style.left = `${popupX}px`;
    popup.style.top = `${popupY}px`;
    popup.style.display = 'block'; // Make popup visible

    event.stopPropagation(); // Stop click from propagating further
}

// --- Function to Hide Popup ---
function hidePopup() {
    popup.style.display = 'none';
}

// --- Event Listeners ---
popupCloseButton.addEventListener('click', hidePopup);
document.addEventListener('click', (event) => {
   if (!event.target.closest('.treasure-marker') && !popup.contains(event.target)) {
      hidePopup();
   }
});

// --- Initialisation ---
treasureData = parseCSV(csvData);
console.log("Parsed Treasure Data:", treasureData);

// Place markers after ensuring map container has dimensions
if (mapDisplayWidth > 0 && mapDisplayHeight > 0) {
    placeMarkers();
} else {
    window.addEventListener('load', () => {
        // Recalculate dimensions on load
        mapDisplayWidth = mapContainer.offsetWidth;
        mapDisplayHeight = mapContainer.offsetHeight;
        if (mapDisplayWidth > 0 && mapDisplayHeight > 0){
             placeMarkers();
        } else {
            console.error("Map container still has zero dimensions after load.");
        }
    });
     console.warn("Map container dimensions initially zero. Waiting for window load.");
}
