const apiUrl = {
  user:{
    login: {
      url: "/api/v1/user/login",
      method: "post"
    },
    logout: {
      url: "/api/v1/user/logout",
      method: "get"
    }
  },
  task:{
    insert: {
      url: "/api/v1/task/insert",
      method: "post"
    },
    delete: {
      url: "/api/v1/task/delete",
      method: "delete"
    },
    update: {
      url: "/api/v1/task/update",
      method: "put"
    },
    query: {
      getInformationByStatusWait: {
        url: "/api/v1/task/getInformationByStatusWait",
        method: "get"
      },
      getInformationByStatusRunning: {
        url: "/api/v1/task/getInformationByStatusRunning",
        method: "get"
      },
      getInformationByStatusBookingFailed: {
        url: "/api/v1/task/getInformationByStatusBookingFailed",
        method: "get"
      },
      getInformationByStatusBookingSuccessButNotificationFailed: {
        url: "/api/v1/task/getInformationByStatusBookingSuccessButNotificationFailed",
        method: "get"
      },
      getInformationByStatusCompleted: {
        url: "/api/v1/task/getInformationByStatusCompleted",
        method: "get"
      },
      getUserAllTask: {
        url: "/api/v1/task/getUserAllTask",
        method: "get"
      },
      getGrabTicketAndNotificationInformationByHash: {
        url: "/api/v1/task/getGrabTicketAndNotificationInformationByHash",
        method: "get"
      },
      getStatusInformationTableListBySuccess: {
        url: "/api/v1/task/getStatusInformationTableListBySuccess",
        method: "get"
      },
      getStatusInformationTableListByFailed: {
        url: "/api/v1/task/getStatusInformationTableListByFailed",
        method: "get"
      },
    }
  },
  initialization:{
    cityJson: {url: "/api/v1/initialization/cityJson", method: "get"},
    purposeCodeJson: {url: "/api/v1/initialization/purposeCodeJson", method: "get"},
    documentTypeJson: {url: "/api/v1/initialization/documentTypeJson", method: "get"},
    seatTypeJson: {url: "/api/v1/initialization/seatTypeJson", method: "get"},
    expectSeatNumberJson: {url: "/api/v1/initialization/expectSeatNumberJson", method: "get"},
    emailSuffixJson: {url: "/api/v1/initialization/emailSuffixJson", method: "get"},
  }
};

export {
  apiUrl
}
