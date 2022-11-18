import React from "react"
import mockData from "./mock-data.json"
import { Address, InfoBlock } from "./components/InfoBlock"
import { Button } from "./components/Button"
import { ImageBlock } from "./components/ImageBlock"
import { Input } from "./components/Input"
import { Pagination } from "./components/Pagination"
import "./Listings.scss"

export interface UnitTable {
  minIncomeMaximum: number
  minIncomeMinimum: number
  rentMaximum: number
  rentMinimum: number
  rentUnit: "percentage" | "currency"
  type: "studio" | "oneBdrm" | "twoBdrm" | "threeBdrm" | "fourBdrm"
}

export interface Listing {
  address: Address
  deadline: string
  id: string
  imageLabels: string[]
  imageURL: string
  listingLabels: string[]
  name: string
  tableHeader: string | null
  tableSubheader: string | null
  unitTableData: UnitTable[]
}

export const Listings = () => {
  const listingData = mockData as Listing[]

  return (
    <div className={"content"}>
      <div className={"container"}>
        <div className={"filter-container"}>
          <div className={"filters"}>
            <div className={"update-items"}>
              <Input label={"Items per page"} />
              <Button onClick={() => {}}>Update</Button>
            </div>
          </div>
          <Pagination numSteps={5} selected={2} />
        </div>
        <div className={"listings"}>
          {listingData.map((listing, index) => {
            return (
              <div className="listing" key={index}>
                <ImageBlock
                  imageURL={listing.imageURL}
                  deadline={listing.deadline}
                  labels={listing.imageLabels}
                />
                <InfoBlock
                  title={listing.name}
                  address={listing.address}
                  tableHeader={listing.tableHeader}
                  tableSubheader={listing.tableSubheader}
                  labels={listing.listingLabels}
                  unitRows={listing.unitTableData}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
