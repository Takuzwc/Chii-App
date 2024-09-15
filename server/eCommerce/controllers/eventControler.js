//image or video(30s)
//description
//pricing [{normal: price, vip: price}]
//age restriction: [14, 15, 16, 17, 18, 19, 20, 21]
//date
// link sharing
// event expiration (for card to be deleted)

exports.getAllEvents = async (req, res) => {
  try {
    res.status(200),
      json({
        status: 'success',
        data: {
          events: events,
        },
      });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getSingleEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event)
      return res.status(404).json({
        status: 'fail',
        message: err,
      });
    res.status(200).json({
      status: 'success',
      data: {
        event,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        event: newEvent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        event,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event)
      return res.status(404).json({
        status: 'fail',
        message: 'Event not found',
      });
    res.status(200).json({
      status: 'success',
      data: null,
      message: 'Event deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};
