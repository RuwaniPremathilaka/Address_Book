<template>
  <v-dialog
    width="500"
  >
    <template
      v-slot:activator="{
        props,
      }"
    >
      <div
        class="d-flex align-center"
      >
        <v-card-title
          class="font-weight-bold pr-0"
          >HelloEvano</v-card-title
        >
        <v-avatar
          style="
            rotate: z -30deg;
          "
          size="70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 512 512"
          >
            <path
              fill="#d2b10f"
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z"
            />
          </svg>
        </v-avatar>
        <v-card-title
          class="font-weight-bold pl-0"
          >,</v-card-title
        >
        <v-spacer></v-spacer>

        <div
          class="d-flex justify-end"
        >
          <v-avatar
            style="
              cursor: pointer;
            "
            v-bind="
              props
            "
            size="70"
            color="#DEFFEE"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path
                fill="#01AC50"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </v-avatar>
        </div>
      </div>
    </template>

    <template
      v-slot:default="{
        isActive,
      }"
    >
      <v-card
        class="mx-auto fmcard"
        width="600"
      >
        <form
          class="newcustomer"
        >
          <v-card-title
            class="txtaddnew"
          >
            Add
            New
            Customer
          </v-card-title>
          <v-text-field
            label="Customer name"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            variant="underlined"
            label="Company"
          ></v-text-field>

          <v-text-field
            :rules="[
              validatePhoneNumber,
            ]"
            counter
            maxlength="10"
            variant="underlined"
            label="Contact Phone"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            label="E-mail"
          ></v-text-field>

          <v-text-field
            variant="underlined"
            label="Country"
          ></v-text-field>
          <v-card-subtitle
            class="txtaddetails"
            >Address
            Details</v-card-subtitle
          >
          <v-row>
            <v-col
              ><v-text-field
                variant="underlined"
                label="Number"
              ></v-text-field
            ></v-col>
            <v-col
              ><v-text-field
                variant="underlined"
                label="Street"
              ></v-text-field
            ></v-col>
          </v-row>

          <v-text-field
            variant="underlined"
            label="City,State"
          ></v-text-field>
          <v-dialog
            width="500"
          >
            <template
              v-slot:activator="{
                props,
              }"
            >
              <v-btn
                v-bind="
                  props
                "
                ><v-btn
                  size="small"
                  class="text-none pl-8 pr-8 font-weight-bold"
                  color="#087830 "
                  variant="outlined"
                  @click="
                    dialog = false
                  "
                >
                  ADD
                </v-btn>
              </v-btn>
            </template>
            <template
              v-slot:default="{
                isActive,
              }"
            >
              <v-card
                class="mx-auto fmcard"
                width="600"
              >
                <form
                  class="newcustomer"
                >
                  <v-card-title
                    class="txtaddnew"
                  >
                    Add
                    New
                    Customer
                  </v-card-title>
                  <v-text-field
                    label="Customer name"
                    variant="underlined"
                  ></v-text-field>

                  <v-text-field
                    variant="underlined"
                    label="Company"
                  ></v-text-field>

                  <v-text-field
                    variant="underlined"
                    label="Contact Phone"
                  ></v-text-field>
                  <v-text-field
                    variant="underlined"
                    label="E-mail"
                  ></v-text-field>

                  <v-text-field
                    variant="underlined"
                    label="Country"
                  ></v-text-field>
                  <v-card-subtitle
                    class="txtaddetails"
                    >Address
                    Details</v-card-subtitle
                  >
                  <v-card-subtitle
                    class="txtadd"
                    >Address
                    1:
                  </v-card-subtitle>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col
                      ><v-text-field
                        variant="underlined"
                        label="Number"
                      ></v-text-field
                    ></v-col>
                    <v-col
                      ><v-text-field
                        variant="underlined"
                        label="Street"
                      ></v-text-field
                    ></v-col>
                  </v-row>

                  <v-text-field
                    variant="underlined"
                    label="City,State"
                  ></v-text-field>
                  <div
                    class="d-flex justify-space-between align-end"
                  >
                    <v-card-subtitle
                      class="txtadd"
                      >Address
                      2:
                    </v-card-subtitle>
                    <v-btn
                      class="mb-2 font-weight-bold"
                      color="#087830 "
                      variant="outlined"
                      size="x-small"
                      >DELETE</v-btn
                    >
                  </div>

                  <v-divider></v-divider>
                  <v-row>
                    <v-col
                      ><v-text-field
                        variant="underlined"
                        label="Number"
                      ></v-text-field
                    ></v-col>
                    <v-col
                      ><v-text-field
                        variant="underlined"
                        label="Street"
                      ></v-text-field
                    ></v-col>
                  </v-row>

                  <v-text-field
                    variant="underlined"
                    label="City,State"
                  ></v-text-field>
                  <v-row
                    class="mt-5"
                  >
                    <v-btn
                      block
                      class="text-none btn-submit"
                      color="#087830 "
                      size="large"
                      variant="flat"
                      type="submit"
                    >
                      SUBMIT
                    </v-btn>
                  </v-row>
                </form>
              </v-card>
            </template>
          </v-dialog>

          <v-row
            class="mt-5"
          >
            <v-btn
              block
              class="text-none btn-submit"
              color="#087830 "
              size="large"
              variant="flat"
              type="submit"
            >
              SUBMIT
            </v-btn>
          </v-row>
        </form>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
export default {
  name: "AddNewCustomer",
  layout:
    "",
  data() {
    return {
      dialog: false,
    };
  },
  methods:
    {
      validatePhoneNumber(
        value
      ) {
        const phoneNumberRegex =
          /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

        if (
          !phoneNumberRegex.test(
            value
          )
        ) {
          return "Enter a valid phone number";
        }

        return true;
      },
    },
};
</script>
<style
  scoped
>
.fmcard {
  border-radius: 30px !important;
}
.newcustomer {
  margin: 50px;
}
.v-btn--variant-elevated {
  box-shadow: none;
}
.v-btn--size-default {
  padding: 0;
}
.btn-submit {
  margin-left: 14px;
  font-size: 12px;
}
.txtaddnew {
  font-size: 30px;
  font-weight: bold;
  padding-left: 0;
  padding-bottom: 40px;
}
.txtaddetails {
  font-size: 16px;
  font-weight: bold;
  padding-left: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  color: black;
}
.txtadd {
  font-size: 12px;
  padding-left: 0;
  padding-top: 20px;
  padding-bottom: 5px;
  color: black;
  font-weight: 600;
}
.v-card-subtitle {
  opacity: unset;
}
</style>
