// CONSTANTS
const colors = ["Red", "Yellow", "Green", "Blue"];
const slot_count = 3;
const vehicle_count = 7;

const vehicle_types = [
  {
    type: "car",
    length: 1,
    capacity: 4,
  },
  {
    type: "minibus",
    length: 2,
    capacity: 6,
  },
  {
    type: "bus",
    length: 3,
    capacity: 10,
  },
];

// HELPERS

const get_random_vehicle = ({ vehicle_types, colors }) => {
  const random_v_index = Math.floor(Math.random() * vehicle_types.length);
  const random_v = vehicle_types[random_v_index];
  const random_c_index = Math.floor(Math.random() * colors.length);
  const random_c = colors[random_c_index];
  return {
    ...random_v,
    rider_count: random_v.capacity,
    color: random_c,
  };
};

// STEP 1: Generate Rider Queue

const generate_queues = ({
  colors,
  vehicle_types,
  vehicle_count,
  slot_count,
}) => {
  const rider_queue = [];
  const vehicle_queue = [];

  const initial_count = slot_count > vehicle_count ? vehicle_count : slot_count;
  const waiting_vehicles = new Array(initial_count).fill(0).map((_) =>
    get_random_vehicle({
      vehicle_types,
      colors,
    })
  );

  while (waiting_vehicles.length > 0) {
    // pick random waiting vehicle
    const random_w_index = Math.floor(Math.random() * waiting_vehicles.length);
    const random_w_vehicle = waiting_vehicles[random_w_index];

    // add a rider to the line
    rider_queue.push(random_w_vehicle.color);
    random_w_vehicle.rider_count--;

    // if the vehicle empty, move and replace it
    if (random_w_vehicle.rider_count == 0) {
      // move from pickup area to parking queue
      vehicle_queue.push(random_w_vehicle);
      waiting_vehicles.splice(random_w_index, 1);

      // if not enough vehicles yet, add new
      if (vehicle_queue.length + waiting_vehicles.length < vehicle_count) {
        // the position doesn't matter, add it to the end
        waiting_vehicles.push(
          get_random_vehicle({
            vehicle_types,
            colors,
          })
        );
      }
    }
  }

  return {
    rider_queue,
    vehicle_queue,

    // toggle: logs below
    // vehicle_count,
    // slot_count,
    // rider_queue_length: rider_queue.length,
    // vehicle_queue_length: vehicle_queue.length
  };
};

// STEP 2: Place Vehicles

const place_vehicles = ({ vehicle_queue }) => {
  // TODO: 🙏
  return "this is parking map";
};

// MAIN

const main = () => {
  // console.log("Starting main()...");
  // console.log(
  //   "get_random_vehicle",
  //   get_random_vehicle({ vehicle_types, colors })
  // );

  const { rider_queue, vehicle_queue } = generate_queues({
    colors,
    vehicle_types,
    vehicle_count,
    slot_count,
  });

  console.log({ rider_queue, vehicle_queue });

  const parking_map = place_vehicles({ vehicle_queue });

  console.log({ parking_map });

  // console.log("Ending main()...");
};

main();
