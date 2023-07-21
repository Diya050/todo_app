import frappe

@frappe.whitelist()
def get_list(*args, **kwargs):
    # You can add any custom logic or validation here if needed
    return frappe.client.get_list(*args, **kwargs)
