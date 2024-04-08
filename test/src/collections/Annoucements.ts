import type { CollectionConfig } from "payload/types";

const Announcements: CollectionConfig = {
    slug: "announcements",
    admin: {
        useAsTitle: "title",
        defaultColumns: ["announcement"],
        listSearchableFields: ["announcement"],
    },
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: "announcement",
            type: "richText",
            localized: true,
        }
    ],
};


export default Announcements

