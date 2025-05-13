output "address" {
  value = {
    for instance in aws_instance.web :
    instance.id => "http://${instance.public_dns}"
  }
}
output "elb_public" {
  value = aws_elb.web.dns_name
}

output "workspace" {
  value = terraform.workspace
}
