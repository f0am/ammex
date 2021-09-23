export const schema = {
    "models": {
        "Client": {
            "name": "Client",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "clientNumber": {
                    "name": "clientNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "contact": {
                    "name": "contact",
                    "isArray": false,
                    "type": {
                        "nonModel": "Person"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "province": {
                    "name": "province",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "postalCode": {
                    "name": "postalCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ClientStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "owners": {
                    "name": "owners",
                    "isArray": true,
                    "type": {
                        "nonModel": "Person"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "codes": {
                    "name": "codes",
                    "isArray": false,
                    "type": {
                        "nonModel": "AccessCodes"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "cheques": {
                    "name": "cheques",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "contracts": {
                    "name": "contracts",
                    "isArray": true,
                    "type": {
                        "model": "Contract"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "client"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Clients",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Contract": {
            "name": "Contract",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "client": {
                    "name": "client",
                    "isArray": false,
                    "type": {
                        "model": "Client"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "contractClientId"
                    }
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "ContractType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "ContractStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": {
                        "nonModel": "MetaData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "jobs": {
                    "name": "jobs",
                    "isArray": true,
                    "type": {
                        "model": "Job"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "contract"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Contracts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Job": {
            "name": "Job",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "contract": {
                    "name": "contract",
                    "isArray": false,
                    "type": {
                        "model": "Contract"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "jobContractId"
                    }
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deadline": {
                    "name": "deadline",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "assignee": {
                    "name": "assignee",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "jobAssigneeId"
                    }
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "JobStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "comments": {
                    "name": "comments",
                    "isArray": true,
                    "type": {
                        "model": "Comment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "job"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Jobs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "role": {
                    "name": "role",
                    "isArray": false,
                    "type": {
                        "enum": "UserRole"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "UserStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "jobs": {
                    "name": "jobs",
                    "isArray": true,
                    "type": {
                        "model": "Job"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "assignee"
                    }
                },
                "comments": {
                    "name": "comments",
                    "isArray": true,
                    "type": {
                        "model": "Comment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "user"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Comment": {
            "name": "Comment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "job": {
                    "name": "job",
                    "isArray": false,
                    "type": {
                        "model": "Job"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "commentJobId"
                    }
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "commentUserId"
                    }
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "CommentStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Comments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {
        "ClientStatus": {
            "name": "ClientStatus",
            "values": [
                "PENDING",
                "ACTIVE",
                "DISABLED"
            ]
        },
        "ContractType": {
            "name": "ContractType",
            "values": [
                "PAYROLL",
                "BOOKKEEPING",
                "TAXES"
            ]
        },
        "ContractStatus": {
            "name": "ContractStatus",
            "values": [
                "PENDING",
                "ACTIVE",
                "DISABLED"
            ]
        },
        "Remittance": {
            "name": "Remittance",
            "values": [
                "MONTHLY",
                "QUATERLY",
                "YEARLY"
            ]
        },
        "Frequency": {
            "name": "Frequency",
            "values": [
                "WEEKLY",
                "BI_WEEKLY",
                "SEMI_MONTHLY",
                "MONTHLY"
            ]
        },
        "UserRole": {
            "name": "UserRole",
            "values": [
                "EMPLOYEE",
                "MANAGER",
                "ADMIN"
            ]
        },
        "UserStatus": {
            "name": "UserStatus",
            "values": [
                "PENDING",
                "ACTIVE",
                "DISABLED"
            ]
        },
        "CommentStatus": {
            "name": "CommentStatus",
            "values": [
                "DRAFT",
                "PUBLISHED"
            ]
        },
        "JobStatus": {
            "name": "JobStatus",
            "values": [
                "PENDING",
                "ACTIVE",
                "IN_PROGRESS",
                "BLOCKED",
                "REVIEW",
                "APPROVAL",
                "WAITING_FOR_PAYMENT",
                "COMPLETED"
            ]
        }
    },
    "nonModels": {
        "Person": {
            "name": "Person",
            "fields": {
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AccessCodes": {
            "name": "AccessCodes",
            "fields": {
                "cliqsecr": {
                    "name": "cliqsecr",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cra": {
                    "name": "cra",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "wsib": {
                    "name": "wsib",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "csst": {
                    "name": "csst",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "MetaData": {
            "name": "MetaData",
            "fields": {
                "bookkeeping": {
                    "name": "bookkeeping",
                    "isArray": false,
                    "type": {
                        "nonModel": "BookkeepingMeta"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "taxes": {
                    "name": "taxes",
                    "isArray": false,
                    "type": {
                        "nonModel": "TaxesMeta"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "payroll": {
                    "name": "payroll",
                    "isArray": false,
                    "type": {
                        "nonModel": "PayrollMeta"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "BookkeepingMeta": {
            "name": "BookkeepingMeta",
            "fields": {
                "startDate": {
                    "name": "startDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "endDate": {
                    "name": "endDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gst": {
                    "name": "gst",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gstRemittance": {
                    "name": "gstRemittance",
                    "isArray": false,
                    "type": {
                        "enum": "Remittance"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "qst": {
                    "name": "qst",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "qstRemittance": {
                    "name": "qstRemittance",
                    "isArray": false,
                    "type": {
                        "enum": "Remittance"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TaxesMeta": {
            "name": "TaxesMeta",
            "fields": {
                "year": {
                    "name": "year",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "corporation": {
                    "name": "corporation",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "corporationYearEndDate": {
                    "name": "corporationYearEndDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PayrollMeta": {
            "name": "PayrollMeta",
            "fields": {
                "startDate": {
                    "name": "startDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "endDate": {
                    "name": "endDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "payrollNumber": {
                    "name": "payrollNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "frequency": {
                    "name": "frequency",
                    "isArray": false,
                    "type": {
                        "enum": "Frequency"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "remittance": {
                    "name": "remittance",
                    "isArray": false,
                    "type": {
                        "enum": "Remittance"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "remittanceQc": {
                    "name": "remittanceQc",
                    "isArray": false,
                    "type": {
                        "enum": "Remittance"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "wsib": {
                    "name": "wsib",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "wsibRemittance": {
                    "name": "wsibRemittance",
                    "isArray": false,
                    "type": {
                        "enum": "Remittance"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "wsibRate": {
                    "name": "wsibRate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "csst": {
                    "name": "csst",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "csstRemittance": {
                    "name": "csstRemittance",
                    "isArray": false,
                    "type": {
                        "enum": "Remittance"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "csstRate": {
                    "name": "csstRate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "6b9288f54391f54d77f3e9aa3cef5a3a"
};