# Approach 001

**Idea:** Work in reverse order. Vehicles arrive at the Pickup Area fully loaded. Riders get off the vehicles and join the Rider Queue. Empty vehicles are then moved to the Parking Lot.

**Step 1 of 2:**

- Fill the Pickup Area with randomly selected vehicles, each fully loaded. For example, a red minibus holding 6 red riders, and so on.
- Once the Pickup Area is full, repeat the following steps:
  - Choose a random rider from the waiting vehicles and add them to the Rider Queue.
  - When a vehicle becomes empty, move it to the Parking Lot and replace it with another randomly chosen, fully loaded vehicle.
  - Repeat until enough vehicles are placed in the Pickup Area.

input: colors, number of slots, vehicle types, AND expected total number of vehicles in the Parking Lot

output: ordered list of vehicles, ordered rider queue

the rider queue is ready now. check.

**Step 2 of 2:**

- given the ordered vehicle list from the step 1, place the vehicles in parking lot.
- ask God for help.
