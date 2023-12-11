<template>
  <v-card
    class="allcustomer"
    flat
  >
    <div
      class="table"
    >
      <div
        class="d-flex justify-space-between"
      >
        <v-card-title
          class="pe-2"
        >
          All
          Customers<br />
          <span
            class="txtactivemember"
            >Active
            Members</span
          >
        </v-card-title>
        <v-spacer></v-spacer>

        <v-text-field
          style="
            max-width: 300px !important;
          "
          class="serach"
          v-model="
            search
          "
          prepend-inner-icon="mdi-magnify"
          label="Search"
          flat
          variant="solo-filled"
        ></v-text-field>

        <div
          class="shortby"
        ></div>
      </div>

      <v-data-table
        :items="
          customers
        "
        :headers="
          headers
        "
        :page.sync="
          page
        "
        :items-per-page="
          itemsPerPage
        "
      >
        <template
          v-slot:item="{
            item,
          }"
        >
          <tr
            @click="
              toggleRow(
                item
              )
            "
          >
            <td>
              {{
                item.name
              }}
            </td>
            <td>
              {{
                item.company
              }}
            </td>
            <td>
              {{
                item.phone
              }}
            </td>
            <td>
              {{
                item.email
              }}
            </td>
            <td>
              {{
                item.county
              }}
            </td>
            <td
              class="pl-0"
            >
              <v-btn
                v-if="
                  item.status ==
                  1
                "
                variant="tonal"
                class="mx-2 btnactive"
              >
                Active
              </v-btn>
              <v-btn
                v-if="
                  item.status ==
                  0
                "
                variant="tonal"
                class="mx-2 btninactive"
                >Inactive</v-btn
              >
            </td>
          </tr>
          <!-- Expanded row content -->

          <tr
            v-if="
              expandedRows.includes(
                item
              )
            "
          >
            <td></td>
            <td>
              Address1
            </td>
            <td>
              {{
                item
                  .address1
                  .number
              }}
            </td>
            <td>
              {{
                item
                  .address1
                  .street
              }}
            </td>
            <td>
              {{
                item
                  .address1
                  .city
              }}
            </td>
          </tr>
          <tr
            v-if="
              expandedRows.includes(
                item
              )
            "
          >
            <td></td>
            <td>
              Address2
            </td>
            <td>
              {{
                item
                  .address2
                  .number
              }}
            </td>
            <td>
              {{
                item
                  .address2
                  .street
              }}
            </td>
            <td>
              {{
                item
                  .address2
                  .city
              }}
            </td>
          </tr>
        </template>
        <template
          v-slot:bottom
        >
          <div>
            <v-pagination
              class="pagination"
              align-end
              v-model="
                page
              "
              :length="
                2
              "
              rounded="0"
            ></v-pagination>
          </div>
        </template>
      </v-data-table>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      itemsPerPage: 5,
      totalItems: 11,
      customers:
        [
          {
            name: "Norby Jouanny ",
            company:
              "Bluezoom",
            phone:
              "771-861-5040",
            email:
              "njouanny0@rediff.com",
            county:
              "Armenia",
            status: 1,
            address1:
              {
                number:
                  "127/A",
                street:
                  "Shelley",
                city: "Court",
              },
            address2:
              {
                number:
                  "48184",
                street:
                  "Fulton",
                city: "Alley",
              },
          },
          {
            name: "Glynis Jessope",
            company:
              "Dynava",
            phone:
              "+57 863 159 1878",
            email:
              "gjessope1@va.gov",
            county:
              "Colombia",
            status: 1,
            address1:
              {
                number:
                  "25039",
                street:
                  "Mallory",
                city: "Pass",
              },
            address2:
              {
                number:
                  "65336",
                street:
                  "Corscot",
                city: "Court",
              },
          },
          {
            name: "Glynis Jessope",
            company:
              "Dynava",
            phone:
              "+57 863 159 1878",
            email:
              "gjessope1@va.gov",
            county:
              "Colombia",
            status: 0,
            address1:
              {
                number:
                  "25039",
                street:
                  "Mallory",
                city: "Pass",
              },
            address2:
              {
                number:
                  "65336",
                street:
                  "Corscot",
                city: "Court",
              },
          },

          {
            name: "Lise Kliment",
            company:
              "Eimbee",
            phone:
              "+260 899 768 2865",
            email:
              "lkliment2@illinois.edu",
            county:
              "Zambia",
            status: 1,
            address1:
              {
                number:
                  "8",
                street:
                  "Bunting",
                city: "Hill",
              },
            address2:
              {
                number:
                  "21",
                street:
                  "Monterey",
                city: "Park",
              },
          },
          {
            name: "Faye Karpf",
            company:
              "Riffpath",
            phone:
              "+7 251 118 3604",
            email:
              "fkarpf3@cbc.ca",
            county:
              "Russia",
            status: 1,
            address1:
              {
                number:
                  "3",
                street:
                  "Gerald",
                city: "Point",
              },
            address2:
              {
                number:
                  "0266",
                street:
                  "Fulton",
                city: "Point",
              },
          },
          {
            name: "Agna Choppin",
            company:
              "Centizu",
            phone:
              "+86 624 572 2962",
            email:
              "achoppin4@networkadvertising.org,",
            county:
              "China",
            status: 1,
            address1:
              {
                number:
                  "4",
                street:
                  "Thackeray",
                city: "Way",
              },
            address2:
              {
                number:
                  "45476",
                street:
                  "Crescent",
                city: "Oaks Terrace",
              },
          },
          {
            name: "Olive Pettican",
            company:
              "Gigabox",
            phone:
              "+62 997 944 1053",
            email:
              "opettican5@army.mil",
            county:
              "Indonesia",
            status: 1,
            address1:
              {
                number:
                  "1108",
                street:
                  "Granby",
                city: "Avenue",
              },
            address2:
              {
                number:
                  "142",
                street:
                  "Ludington",
                city: "Place",
              },
          },
          {
            name: "Giacopo Yakuntzov",
            company:
              "Brightdog",
            phone:
              "+380 400 692 8332",
            email:
              "gyakuntzov6@earthlink.net",
            county:
              "Ukraine",
            status: 0,
            address1:
              {
                number:
                  "1",
                street:
                  "Bayside",
                city: "Hill",
              },
            address2:
              {
                number:
                  "98519",
                street:
                  "Tomscot",
                city: "Street",
              },
          },
          {
            name: "Gun Mattea",
            company:
              "Latz",
            phone:
              "+1 478 832 0599",
            email:
              "gmattea7@g.co",
            county:
              "United States",
            status: 0,
            address1:
              {
                number:
                  "15",
                street:
                  "Bay",
                city: "Pass",
              },
            address2:
              {
                number:
                  "5198",
                street:
                  "Trailsway",
                city: "Drive",
              },
          },
          {
            name: "Buiron Otton",
            company:
              "Photospace",
            phone:
              "+51 651 830 3206",
            email:
              "botton8@army.mil",
            county:
              "Peru",
            status: 1,
            address1:
              {
                number:
                  "65",
                street:
                  "Straubel",
                city: "Trail",
              },
            address2:
              {
                number:
                  "78",
                street:
                  "Monument",
                city: "Circle",
              },
          },
          {
            name: "Mal Broomfield",
            company:
              "Kazio",
            phone:
              "+7 582 245 9745",
            email:
              "mbroomfield9@example.com",
            county:
              "Russia",
            status: 1,
            address1:
              {
                number:
                  "5",
                street:
                  "Judy",
                city: "Crossing",
              },
            address2:
              {
                number:
                  "499",
                street:
                  "Manufacturers",
                city: "Terrace",
              },
          },
        ],
      headers:
        [
          {
            align:
              "start",
            key: "name",
            sortable: false,
            title:
              "Customer Name",
          },
          {
            key: "company",
            title:
              "Company",
          },
          {
            key: "phone",
            title:
              "Phone Number",
          },
          {
            key: "email",
            title:
              "Email",
          },
          {
            key: "county",
            title:
              "County",
          },
          {
            key: "data-table-expand",
            title:
              "Status",
          },
        ],
      expandedRows:
        [],
    };
  },
  methods:
    {
      toggleRow(
        item
      ) {
        if (
          this.expandedRows.includes(
            item
          )
        ) {
          this.expandedRows =
            this.expandedRows.filter(
              (
                row
              ) =>
                row !==
                item
            );
        } else {
          this.expandedRows.push(
            item
          );
        }
      },
    },
};
</script>
<style
  scoped
>
.customPagination {
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: blue;
}

.allcustomer {
  margin-top: 25px;
  border-radius: 25px;
}

.newest {
  width: 200px;
  height: 30px;
}

.btnactive {
  width: 100px;
  border: none;
  color: #087830;
  border: 1px
    solid
    #087830;
  text-align: center;
  font-size: 12px;
}
.btninactive {
  width: 100px;
  border: none;
  color: #fc0707;
  border: 1px
    solid
    #fc0707;
  text-align: center;
  font-size: 12px;
}
.shortby {
  display: flex;
}
.txtaddetails {
  background-color: #ededed98;
  padding-bottom: 20px;
}
.table {
  margin: 20px;
}
.txtactivemember {
  color: #3fcca9;
  font-size: 14px;
}
</style>
