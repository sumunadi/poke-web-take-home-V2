# Prerequisites: Node v20.19.x 
# Since its a Branch of Main, either clone it or merge into copy of main

# install dependencies
npm install

# start dev server
npm run dev

# The app will be available at: 
http://localhost:3000

# Technologies choices and used.
Used the same technologies provided and requested to use, such as React, Vite, Axios, ChartJs.
Used react-chartjs-2 good default charts liek radar and bar so easy to implement.
Used Session storage aching to avoid redundant API calls.
Used Basic CSS just appended to existing, as it was enough for these features being added.

These are simple enough to do in a short time frame instead of adding something like tailwind or something else.

# If I had more time
Add more charts, ESPECIALLY the legendary vs non legendary,as it would be much more visually appealing compared to the current 2 bar and radar charts
Add Dark mode toggle, it would be nicer
Make more Mobile friendly, I see some fill issues in Mobile view but still shows everything and works.

# Assumptions & Trade-Offs
Dataset is limited to 151 so limited for performance but also limits how much data can be shown and comapred if i did more charts etc
I set limit for Api request to 8 to make batches of 8 request as its a public api.
For searching of pokemon I only showed the first matched pokemon sprite for simple implementation.
Converted height and weight to meters and kg for user friendly as that is what is more common
