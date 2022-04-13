module.exports = ({ env }) => ({
  // //////////////////////////////////// GRAPHQL ////////////////////////////////////
  // https://docs.strapi.io/developer-docs/latest/plugins/graphql.html#configurations
  // Set Endpoint /graphql => http://localhost:1337/graphql
  /*
    # Example Query
    query {
        articles{
            data{
            id
            attributes{
                title
            }
        }
    }
    }
  */

  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      //   depthLimit: 7,
      //   amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

  // /////////////////////////////////////////////////////////////////////////////////

  // //////////////////////////////////// GRAPHQL ////////////////////////////////////
  // https://www.npmjs.com/package/@strapi/provider-email-sendgrid
  // https://docs.strapi.io/developer-docs/latest/plugins/email.html#programmatic-usage

  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("SENDGRID_FROM_ADDR"),
        defaultReplyTo: env("SENDGRID_REPLY_ADDR"),
        testAddress: env("SENDGRID_FROM_ADDR"),
      },
    },
  },

  // /////////////////////////////////////////////////////////////////////////////////

  // ////////////////////////////////// CLOUDINARY ///////////////////////////////////
  // https://strapi.io/blog/add-cloudinary-support-to-your-strapi-application

  /*
    query {
        authors{
            data{
            id
            attributes{
                name
                image {
                data {
                    attributes {
                    url
                    }
                }
                }
            }
            }
        }
    }
  */

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  // /////////////////////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////////////////////

  "email-designer": {
    enabled: true,

    // ⬇︎ Add the config property
    config: {
      editor: {
        // optional - if you have a premium unlayer account
        // projectId: [UNLAYER_PROJECT_ID],

        tools: {
          heading: {
            properties: {
              text: {
                value: "This is the new default text!",
              },
            },
          },
        },
        options: {
          features: {
            colorPicker: {
              presets: ["#D9E3F0", "#F47373", "#697689", "#37D67A"],
            },
          },
          fonts: {
            showDefaultFonts: false,
            /*
             * If you want use a custom font you need a premium unlayer account and pass a projectId number :-(
             */
            customFonts: [
              {
                label: "Anton",
                value: "'Anton', sans-serif",
                url: "https://fonts.googleapis.com/css?family=Anton",
              },
              {
                label: "Lato",
                value: "'Lato', Tahoma, Verdana, sans-serif",
                url: "https://fonts.googleapis.com/css?family=Lato",
              },
              // ...
            ],
          },
          mergeTags: [
            {
              name: "Email",
              value: "{{= USER.username }}",
              sample: "john@doe.com",
            },
            // ...
          ],
        },
        appearance: {
          theme: "dark",
          panels: {
            tools: {
              dock: "left",
            },
          },
        },
      },
    },
  },

  // /////////////////////////////////////////////////////////////////////////////////
});
