# modules/load_balancer/main.tf
provider "aws" {
  region = "us-east-1"
}

resource "aws_lb" "load_balancer" {
  name = "example-load-balancer"

  subnets         = data.aws_subnets.all.ids
  security_groups = ["${aws_security_group.allow-ssh.id}"]
}

resource "aws_lb_target_group" "target_group" {
  name        = "nginx-${terraform.workspace}-target-group"
  port        = 80
  protocol    = "HTTP"
  target_type = "instance"

  dynamic "targets" {
    for_each = [for i in range(var.quantidade_nos) : {
      id   = aws_instance.web.*.id
      port = 80
    }]
    content {
      id   = targets.value.id
      port = targets.value.port
    }
  }
}


